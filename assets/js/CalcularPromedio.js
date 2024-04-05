function CalcularPromedioDeAnios(songs) {
    const totalYears = songs.reduce((accumulator, song) => 
    accumulator + song.year, 0);

    const CalcularPromedio = totalYears / songs.length;
  
    return Math.round(CalcularPromedio);
  }

 export { CalcularPromedioDeAnios };