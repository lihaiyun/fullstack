import MockAdapter from 'axios-mock-adapter';
import http from './http';

const mock = new MockAdapter(http, { delayResponse: 300 });

let tutorials = [
    { id: 1, title: 'React Basics', description: 'Introduction to React components and props.', createdAt: '2026-01-10T08:00:00.000Z' },
    { id: 2, title: 'State & Effects', description: 'Managing state with useState and side effects with useEffect.', createdAt: '2026-01-15T09:30:00.000Z' },
    { id: 3, title: 'React Router', description: 'Client-side routing with React Router v6.', createdAt: '2026-01-20T10:00:00.000Z' },
];
let nextId = 4;

// GET /tutorial?search=...  or  GET /tutorial
mock.onGet(/\/tutorial(\?.*)?$/).reply((config) => {
    const url = new URL(config.url, 'http://localhost');
    const search = url.searchParams.get('search')?.toLowerCase() ?? '';
    // console.log('Search query:', search);
    const result = search
        ? tutorials.filter(t =>
            t.title.toLowerCase().includes(search) ||
            t.description.toLowerCase().includes(search)
          )
        : tutorials;
    return [200, result];
});

// GET /tutorial/:id
mock.onGet(/\/tutorial\/\d+/).reply((config) => {
    const id = parseInt(config.url.split('/').pop());
    const tutorial = tutorials.find(t => t.id === id);
    return tutorial ? [200, tutorial] : [404, { message: 'Not found' }];
});

// POST /tutorial
mock.onPost('/tutorial').reply((config) => {
    const body = JSON.parse(config.data);
    const tutorial = { id: nextId++, ...body, createdAt: new Date().toISOString() };
    tutorials.push(tutorial);
    return [201, tutorial];
});

// PUT /tutorial/:id
mock.onPut(/\/tutorial\/\d+/).reply((config) => {
    const id = parseInt(config.url.split('/').pop());
    const body = JSON.parse(config.data);
    const index = tutorials.findIndex(t => t.id === id);
    if (index === -1) return [404, { message: 'Not found' }];
    tutorials[index] = { ...tutorials[index], ...body };
    return [200, tutorials[index]];
});

// DELETE /tutorial/:id
mock.onDelete(/\/tutorial\/\d+/).reply((config) => {
    const id = parseInt(config.url.split('/').pop());
    const index = tutorials.findIndex(t => t.id === id);
    if (index === -1) return [404, { message: 'Not found' }];
    tutorials.splice(index, 1);
    return [200, { message: 'Deleted successfully' }];
});

export default mock;
