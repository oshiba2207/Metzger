import Axios from "axios";
import styles from "../../styles/Artikel.module.css"
import React, { useState} from 'react'


const ArtikelList = ({artikelData}) => {
    const [Lieferdatum, setLieferdatum] = useState(new Date());
    return(
        <div className={styles.artikelContainer}>
            <form action="/api/bestellung" method="post" className={styles.bestellliste}>
                <label htmlFor="Lieferdatum"></label>
                {/* <input type="date" name="Liefertermin" onChange={(date)=> setLieferdatum(date)} value={Lieferdatum}></input> */}
                <input type="date" id="Lieferdatum" name="Lieferdatum" defaultValue={Lieferdatum} onBlur={(val) => { setLieferdatum(val.target.value) }}></input>
                {artikelData.map((artikel) => {
                    return(<div className={styles.Bestellelemente} key={artikel.id}>
                    <label htmlFor="Bestellmenge">{artikel.Artikelnummer} - {artikel.Bezeichnung}</label> 
                    <input className={styles.mengenInput} type="number" id={artikel.id} name="Bestellmenge"/>
                    <input type="hidden" name="Artikelnummer" value={artikel.Artikelnummer}/> 
                    </div>)
                })}
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export const getStaticProps = async () => {
    const data = await Axios.get(
        "http://simonhacks.com:3001/api/getArtikel"
    );

    return {
        props: {
            artikelData: data.data,
        },
        revalidate: 10,
    };
};

export default ArtikelList;