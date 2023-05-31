function getLocation() {
    return new Promise(function (resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    let array = [latitude, longitude];
                    resolve(array);
                },
                function (error) {
                    reject(new Error("Erro ao obter a localização: " + error.message));
                }
            );
        } else {
            reject(new Error("Geolocalização não é suportada neste navegador."));
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var dataAtual = new Date();

    var day = dataAtual.getDate(); // Retorna o dia do mês (1-31)
    var month = dataAtual.getMonth() + 1; // Retorna o mês (0-11). Adicione +1 para obter o mês correto (1-12)
    var year = dataAtual.getFullYear(); // Retorna o ano com 4 dígitos (ex: 2023)
    var hour = dataAtual.getHours(); // Retorna as horas (0-23)
    var minute = dataAtual.getMinutes(); // Retorna os minutos (0-59)

    document.querySelector('.date').textContent = day + '/' + month + '/' + year;
    document.querySelector('.last-update').textContent = 'Última atualização: ' +
        hour + ':' + minute;

    getLocation()
        .then(function (array) {
            return fetch("/Estudo/Clima/config/Intermediary.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    lat: array[0],
                    lon: array[1]
                })
            });
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Erro na requisição. Status do erro: " + response.status);
            }
        })
        .then(function (response) {
            console.log(response);
            document.querySelector('.weather-description-now').textContent = response.weather[0].description;
            console.log(response);

            // Informações de temperatura
            document.querySelector('.temperature').textContent = response.main.temp + 'ºc';
            document.querySelector('.feelsLike').textContent = response.main.feels_like + 'ºc';
            document.querySelector('.morningTemperature').textContent = response.main.temp_min + 'ºc';
            document.querySelector('.nightTemperature').textContent = response.main.temp_max + 'ºc';
            document.querySelector('.humidity').textContent = response.main.humidity + '%';

            // Informações do vento
            document.querySelector('.windSpeed').textContent = response.wind.speed + 'm/s';

            // Outras informações
            document.querySelector('.cloudiness').textContent = response.clouds.all + '%';
            document.querySelector('.visibility').textContent = response.visibility / 1000 + 'Km';
            document.querySelector('.city').textContent = response.name;
        })
        .catch(function (error) {
            // Trate erros de requisição, se houver
            console.error("Erro na requisição:", error);
        });
});