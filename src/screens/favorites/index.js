import React from "react";
import "./favorites.css";

export default function Favorites() {
  const favSongs = [
    { id: 1, title: "Perfect", artist: "Ed Sheeran", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosXorhydu5a1xKXfZyVZr34TQM3wADo7QaQ&s" },
    { id: 2, title: "Attention", artist: "Charlie Puth", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3yBOfpyuMBf4udwBIqo3NmRYfSi7ZhQfWg&s" },
    { id: 3, title: "Kesariya", artist: "Arijit Singh", cover: "https://artistbookingcompany.com/wp-content/uploads/2024/03/arjit-singh-680x680.png" },
    { id: 4, title: "Let Me Love You", artist: "DJ Snake ft. Justin Bieber", cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/DJS-Presskit05_%28cropped%29.jpg/250px-DJS-Presskit05_%28cropped%29.jpg" },
    { id: 5, title: "Tum Hi Ho", artist: "Arijit Singh", cover: "https://artistbookingcompany.com/wp-content/uploads/2024/03/arjit-singh-680x680.png" },
    { id: 6, title: "Believer", artist: "Imagine Dragons", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSR6D2bPss6p--MiBYpxhK8rKRT7FKLd4vA&s" },
    { id: 7, title: "Peaches", artist: "Justin Bieber", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzh16DW7IcTXLum59HN34I7FKIJBTUj8c5WQ&s" },
    { id: 8, title: "Pasoori", artist: "Ali Sethi x Shae Gill", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_G9gHT3pumU8qI9gz0K2lPXjUrM86AVxZQ&s" },
    { id: 9, title: "Night Changes", artist: "One Direction", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgl7n-5ae21DxmeHMKkumByDehSm90hFXxA&s" },
    { id: 10, title: "Ranjha", artist: "Jasleen Royal & B Praak", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSqRDUSV8uS83EYg3HXn5kHbXUHGGskbReA&s" },
    { id: 11, title: "Apna Bana Le", artist: "Arijit Singh", cover: "https://artistbookingcompany.com/wp-content/uploads/2024/03/arjit-singh-680x680.png" },
    { id: 12, title: "Stay", artist: "The Kid LAROI & Justin Bieber", cover: "https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg" },
  ];

  return (
    <div className="favorites-page">
      <h2>💖 Your Favorites</h2>
      <div className="favorites-list">
        {favSongs.map((song) => (
          <div key={song.id} className="favorites-card">
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