
document.addEventListener('DOMContentLoaded', function () {
    const DRIVER_API_URL = 'http://localhost:4000/drivers';
    const MOBIL_API_URL = 'http://localhost:4000/mobils';
    const RESERVASI_API_URL = 'http://localhost:4000/reservasis';
    const USER_API_URL = 'http://localhost:4000/users';

    function fetchData(url, listId, renderFunction) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const listElement = document.getElementById(listId);
                listElement.innerHTML = '';
                data.forEach(item => {
                    listElement.appendChild(renderFunction(item));
                });
            })
            .catch(error => {
                const listElement = document.getElementById(listId);
                listElement.innerHTML = `<div class="alert alert-danger" role="alert">Error fetching data: ${error.message}</div>`;
                console.error(`Error fetching data from ${url}:`, error);
            });
    }

    function renderDriver(driver) {
        const listItem = document.createElement('div');
        listItem.className = 'col-md-4';
        listItem.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${driver.namaDriver}</h5>
                    <p class="card-text">${driver.nomorTelepon}</p>
                    <p class="card-text">${driver.nomorSIM}</p>
                    <p class="card-text">${driver.status}</p>
                </div>
            </div>
        `;
        return listItem;
    }

    function renderMobil(mobil) {
        const listItem = document.createElement('div');
        listItem.className = 'col-md-4';
        listItem.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${mobil.namaMobil}</h5>
                    <p class="card-text">${mobil.merek}</p>
                    <p class="card-text">${mobil.platNomor}</p>
                    <p class="card-text">${mobil.kapasitas}</p>
                    <p class="card-text">${mobil.statusMobil}</p>
                    <p class="card-text"><img src="${mobil.foto}" alt="${mobil.namaMobil}" class="img-fluid"></p>
                </div>
            </div>
        `;
        return listItem;
    }

    function renderReservasi(reservasi) {
        const listItem = document.createElement('div');
        listItem.className = 'col-md-4';
        listItem.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${reservasi.pemesan}</h5>
                    <p class="card-text">${reservasi.platMobil}</p>
                    <p class="card-text">${reservasi.driver}</p>
                    <p class="card-text">${formatDate(reservasi.startDate)}</p>
                    <p class="card-text">${formatDate(reservasi.endDate)}</p>
                    <p class="card-text">${reservasi.harga}</p>
                    <p class="card-text">${reservasi.status}</p>
                </div>
            </div>
        `;
        return listItem;
    }

    function renderUser(user) {
        const listItem = document.createElement('div');
        listItem.className = 'col-md-4';
        listItem.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${user.username}</h5>
                    <p class="card-text">${user.nama}</p>
                    <p class="card-text">${user.email}</p>
                    <p class="card-text">${user.password}</p>
                    <p class="card-text">${user.nomorTelepon}</p>
                    <p class="card-text">${user.alamat}</p>
                </div>
            </div>
        `;
        return listItem;
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    // Fetch data for all lists
    fetchData(DRIVER_API_URL, 'driver-list', renderDriver);
    fetchData(MOBIL_API_URL, 'mobil-list', renderMobil);
    fetchData(RESERVASI_API_URL, 'reservasi-list', renderReservasi);
    fetchData(USER_API_URL, 'user-list', renderUser);
});

