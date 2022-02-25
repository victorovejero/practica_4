async function API(){
    const url = 'https://randomuser.me/api/?results=1000';

    try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }

}

async function getRecursosHumanos(i){
    let rh = await API();
    let rhDatos = new Array(1);
    rhDatos.push(rh.results[1].picture.large); //FOTO PRIMERO
    rhDatos.push(rh.results[1].name.title); //Titulo
    rhDatos.push(rh.results[1].name.first); //primer nombre
    rhDatos.push(rh.results[1].name.last); //apellido
    rhDatos.push(rh.results[1].email);
    rhDatos.push(rh.results[1].cell);
    rhDatos.push(rh.results[1].location.state);
    rhDatos.push(rh.results[1].location.country);

    //console.log(rhDatos);

    // FOTO
    let recursosHumanos = document.getElementById("recursosHumanosFoto");
    recursosHumanos.src = rhDatos[1];
    recursosHumanos.height ="100px";
    recursosHumanos.width = "100px";

    //NOMBRE COMPLETO
    document.getElementById("recursosHumanosNombre").innerHTML = rhDatos[2] + "\n" + rhDatos[3] + "\n" + rhDatos[4];
    document.getElementById("recursosHumanosEmail").innerHTML = "Email: " + rhDatos[5];
    document.getElementById("recursosHumanosTele").innerHTML = "Teléfono: " + rhDatos[6];
    document.getElementById("recursosHumanosSede").innerHTML = "Sede: " + rhDatos[7] +", "+rhDatos[8];
}
async function getCFO(){
    let rh = await API();
        let rhDatos = new Array(1);
        rhDatos.push(rh.results[2].picture.large); //FOTO PRIMERO
        rhDatos.push(rh.results[2].name.title); //Titulo
        rhDatos.push(rh.results[2].name.first); //primer nombre
        rhDatos.push(rh.results[2].name.last); //apellido
        rhDatos.push(rh.results[2].email);
        rhDatos.push(rh.results[2].cell);
        rhDatos.push(rh.results[2].location.state);
        rhDatos.push(rh.results[2].location.country);

        //console.log(rhDatos);

        // FOTO
        let recursosHumanos = document.getElementById("fotoCFO");
        recursosHumanos.src = rhDatos[1];
        recursosHumanos.height ="100px";
        recursosHumanos.width = "100px";

        //NOMBRE COMPLETO
        document.getElementById("nombreCFO").innerHTML = rhDatos[2] + "\n" + rhDatos[3] + "\n" + rhDatos[4];
        document.getElementById("emailCFO").innerHTML = "Email: " + rhDatos[5];
        document.getElementById("cellCFO").innerHTML = "Teléfono: " + rhDatos[6];
        document.getElementById("sedeCFO").innerHTML = "Sede: " + rhDatos[7] +", "+rhDatos[8];
}
async function getCEO(){
    let rh = await API();
        let rhDatos = new Array(1);
        rhDatos.push(rh.results[3].picture.large); //FOTO PRIMERO
        rhDatos.push(rh.results[3].name.title); //Titulo
        rhDatos.push(rh.results[3].name.first); //primer nombre
        rhDatos.push(rh.results[3].name.last); //apellido
        rhDatos.push(rh.results[3].email);
        rhDatos.push(rh.results[3].cell);
        rhDatos.push(rh.results[3].location.state);
        rhDatos.push(rh.results[3].location.country);

        //console.log(rhDatos);

        // FOTO
        let recursosHumanos = document.getElementById("fotoCEO");
        recursosHumanos.src = rhDatos[1];
        recursosHumanos.height ="100px";
        recursosHumanos.width = "100px";

        //NOMBRE COMPLETO
        document.getElementById("nombreCEO").innerHTML = rhDatos[2] + "\n" + rhDatos[3] + "\n" + rhDatos[4];
        document.getElementById("emailCEO").innerHTML = "Email: " + rhDatos[5];
        document.getElementById("cellCEO").innerHTML = "Teléfono: " + rhDatos[6];
        document.getElementById("sedeCEO").innerHTML = "Sede: " + rhDatos[7] +", "+rhDatos[8];
}

API();
getRecursosHumanos();
getCFO();
getCEO();