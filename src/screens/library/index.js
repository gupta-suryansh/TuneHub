import React from "react";
import "./library.css";

export default function Library() {
  const songs = [
    { id: 1, title: "Attention", artist: "Charlie Puth", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 2, title: "Perfect", artist: "Ed Sheeran", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 3, title: "Let Me Love You", artist: "DJ Snake ft. Justin Bieber", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 4, title: "Shape of You", artist: "Ed Sheeran", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 5, title: "Senorita", artist: "Shawn Mendes & Camila Cabello", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 6, title: "Night Changes", artist: "One Direction", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 7, title: "Love Me Like You Do", artist: "Ellie Goulding", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 8, title: "Apna Bana Le", artist: "Arijit Singh", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 9, title: "Kesariya", artist: "Arijit Singh", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 10, title: "Tum Hi Ho", artist: "Arijit Singh", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 11, title: "Tera Ban Jaunga", artist: "Akhil Sachdeva & Tulsi Kumar", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 12, title: "Tujhe Kitna Chahne Lage", artist: "Arijit Singh", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 13, title: "We Don’t Talk Anymore", artist: "Charlie Puth ft. Selena Gomez", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 14, title: "Stay", artist: "The Kid LAROI & Justin Bieber", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 15, title: "Believer", artist: "Imagine Dragons", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 16, title: "Counting Stars", artist: "OneRepublic", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 17, title: "Levitating", artist: "Dua Lipa", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 18, title: "Blinding Lights", artist: "The Weeknd", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 19, title: "Peaches", artist: "Justin Bieber", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 20, title: "Raabta", artist: "Arijit Singh", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 21, title: "Brown Munde", artist: "AP Dhillon", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 22, title: "Do Gallan", artist: "Garry Sandhu", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 23, title: "Heat Waves", artist: "Glass Animals", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpg" },
    { id: 24, title: "Ranjha", artist: "Jasleen Royal & B Praak", cover: "https://marketplace.canva.com/EAGnmDwaNpA/1/0/1600w/canva-beige-black-and-white-simple-minimalist-summer-mix-music-album-cover-Hnl8kV6GDeY.jpgf" },
  ];

  return (
    <div className="library-page">
      <h2>🎵 Your Library</h2>
      <div className="library-list">
        {songs.map((song) => (
          <div key={song.id} className="library-card">
            <img src={song.cover} alt={song.title} />
            <div>
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}