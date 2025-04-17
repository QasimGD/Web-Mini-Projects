
        const users = [
            { "name": "ali", "age": 20, "phone": 123123 },
            { "name": "ahmed", "age": 20, "phone": 345 },
            { "name": "usman", "age": 20, "phone": 678 }
        ];

        const Search = (e) => {
            const search_text = e.target.value.toLowerCase();
            const filtered_users = users.filter(user => {
                return (
                    user.name.toLowerCase().includes(search_text) ||
                    user.age.toString().includes(search_text) ||
                    user.phone.toString().includes(search_text)
                );
            });
            displayTable(filtered_users);
            displayFilterData(filtered_users);
        };

        const displayTable = (data) => {
            const tableBody = document.getElementById("userTableBody");
            tableBody.innerHTML = ""; // Clear existing rows

            data.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                    <td>${user.phone}</td>
                `;
                tableBody.appendChild(row);
            });
        };

        const displayFilterData = (data) => {
            const filterData = document.getElementById("filterData");
            if (data.length > 0) {
                const names = data.map(user => user.name);
                const ages = data.map(user => user.age);
                const phones = data.map(user => user.phone);
                filterData.textContent = `Filter Data (Names): ${names.join(", ")} | Ages: ${ages.join(", ")} | Phones: ${phones.join(", ")}`;
            } else {
                filterData.textContent ="not showing result"; 
            }
        };
        document.write(`<br /> Actual Data : ${JSON.stringify(users)} <br />`)
        
