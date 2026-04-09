```bash
cd lab1
7z a -tzip ..\zip\lab1_solution.zip * -xr!node_modules -xr!.env
cd ..

cd lab2
7z a -tzip ..\zip\lab2_solution.zip * -xr!node_modules -xr!.env
cd ..

cd lab2-sqlite
7z a -tzip ..\zip\lab2_sqlite_solution.zip * -xr!node_modules -xr!.env
cd ..

cd lab3
7z a -tzip ..\zip\lab3_solution.zip * -xr!node_modules -xr!.env
cd ..

cd lab4
7z a -tzip ..\zip\lab4_solution.zip * -xr!node_modules -xr!.env
cd ..

cd lab5
7z a -tzip ..\zip\lab5_solution.zip * -xr!node_modules -xr!.env
cd ..

cd lab6
7z a -tzip ..\zip\lab6_solution.zip * -xr!node_modules -xr!.env
cd ..

cd lab7
7z a -tzip ..\zip\lab7_solution.zip * -xr!node_modules -xr!.env -xr!*.jpg
cd ..

7z a -tzip zip\lab_final_solution.zip learning-app\* -xr!node_modules -xr!.env -xr!*.jpg
```