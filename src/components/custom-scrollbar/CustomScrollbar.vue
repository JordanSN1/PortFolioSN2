<template>
    <div class="custom-scrollbar">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style>
  .custom-scrollbar {
    overflow-y: auto;
    height: 100%;
  }
  
  .custom-scrollbar ::-webkit-scrollbar {
    width: 8px; /* Largeur de la barre de défilement */
  }
  
  .custom-scrollbar ::-webkit-scrollbar-thumb {
    background: #4b5563; /* Couleur de la barre */
    border-radius: 10px; /* Arrondi */
  }
  
  .custom-scrollbar ::-webkit-scrollbar-track {
    background: #1f2937; /* Couleur de fond de la piste */
  }
  </style>
  