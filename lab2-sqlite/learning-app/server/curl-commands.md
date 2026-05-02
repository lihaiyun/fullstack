# Tutorial API - curl Commands

Base URL: `http://localhost:3001`

---

## Create a Tutorial (POST)

```
curl -X POST http://localhost:3001/tutorial -H "Content-Type: application/json" -d "{\"title\": \"My First Tutorial\", \"description\": \"This is a description of my first tutorial.\"}"
```

**Validation rules:** `title` 3–100 chars, `description` 3–500 chars (both required).

---

## Get All Tutorials (GET)

```
curl http://localhost:3001/tutorial
```

### With Search Query

```
curl "http://localhost:3001/tutorial?search=first"
```

---

## Get a Tutorial by ID (GET)

```
curl http://localhost:3001/tutorial/1
```

Returns `404` if the ID does not exist.

---

## Update a Tutorial (PUT)

```
curl -X PUT http://localhost:3001/tutorial/1 -H "Content-Type: application/json" -d "{\"title\": \"Updated Title\", \"description\": \"Updated description text.\"}"
```

Both fields are optional — omit either to leave it unchanged.

---

## Delete a Tutorial (DELETE)

```
curl -X DELETE http://localhost:3001/tutorial/1
```

Returns `200` on success, `404` if the ID does not exist.
