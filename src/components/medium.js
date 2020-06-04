/** 
 * File: medium.js
 * Description: Componente para las Consultas a la Api Medium y enlazarlas a la App.
*/
// URL de llamada a la API : https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40oarodriguezs
// URL alternativa Api Uriel -> https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz

import React, { useState, useEffect } from 'react';
import Posts from './posts';
import Post from './post';

export default ()=>{
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        const data = sessionStorage.getItem('posts');
        
        if (data) {
            setPosts(JSON.parse(data)); // parsear la data a JSON
            //myPosts = JSON.parse(data);
            
            //return setPosts(myPosts); // parsear la data a JSON
        }
        let myPosts;
        
        async function getMediumPosts() {
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz");
            myPosts = await response.json();
            
            sessionStorage.setItem('posts',JSON.stringify(myPosts.items));

            setPosts(myPosts.items);
        }

            getMediumPosts(); // llamado de la Fn.
    },[]);

    
    return (
        <div className="max-w-4xl mx-auto overflow-x-scroll">
            <Posts 
                data={posts}
                card={Post}
                title="Mis Publicaciones en Midium"
                />
        </div>
    );
}