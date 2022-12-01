import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

const News = () => {

    const [newData,setNewData] = useState([]);
    const traerNoticias = async () => {

        const response = await axios.get("http://localhost:8020/News")
        setNewData(response.data)
    }

    useEffect(() => {
        traerNoticias()
    }, []);


  return (

    <div>{newData.map(data => (

        <IonCard key={data.id}>
        <img alt="Silhouette of mountains" src={data.imageUrl} />
        <IonCardHeader>
          <IonCardTitle>{data.title}</IonCardTitle>
          <IonCardSubtitle>{data.description}</IonCardSubtitle>
        </IonCardHeader>
  
        <IonCardContent>
          {data.date} - {data.author}
        </IonCardContent>
      </IonCard>
        
    ))}</div>
  )
}

export default News