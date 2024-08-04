<!-- ModalComponent.vue -->
<template>
    <!-- Modal -->
    <div
      class="modal fade"
      id="imprintModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Impressum</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
                This site is used for non-business purposes.
                Therefore, no legal notice is required by law.
                Further information below:
            </p>
            <p> Diese Seite wird für nicht-geschäftliche Zwecke verwendet.
                Deshalb sind keine Impressumsangaben verpflichtend vorgeschrieben.
                Weitere Informationen: </p>
            <a href="https://www.bmuv.de/themen/verbraucherschutz/digitaler-verbraucherschutz/impressumspflicht#c66866">bmuv.de</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'ModalComponent'
  }
  </script>
  