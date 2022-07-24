import Axios from "axios";

export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    /* console.log('body: ', body) */

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.Artikelnummer) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'First or last name not found' })
    }
    const artikelArray = body.Artikelnummer;
    const Bestellarray = body.Bestellmenge;
    let Lieferdatum = body.Lieferdatum;
 /*    Lieferdatum = Lieferdatum.toISOString().split('T')[0]; */

    for(let i = 0; i<artikelArray.length; i++){
        if(Bestellarray[i] > 0){
            console.log(artikelArray[i] + " " + Bestellarray[i])
            const Bestelldaten = {
                "Kunde": 3661, "Liefertermin": Lieferdatum, "Artikel": artikelArray[i], "Menge": Bestellarray[i] };
            fetch("http://simonhacks.com:3001/api/insert", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Bestelldaten)
            }).then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            }).catch(function (err) {
                console.log(err)
            });
        }
    }

    // Found the name.
    // Sends a HTTP success code
    /* res.status(200).json({ data: `${body.Artikelnummer} ${body.Bestellmenge}` }) */
    res.status(200).json({ data: artikelArray + Bestellarray })
  
}