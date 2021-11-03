<template>
  <div>
    <div class="sdds-header">
      <span class="scania-symbol"></span>
    </div>

    <div class="sdds-content-header">
      <div class="sdds-container-fluid">
        <div class="sdds-row">
          <div
            class="
              sdds-col-xlg-16 sdds-col-md-8 sdds-col-sm-4
              header-greeting-wrapper
            "
          >
            <span class="header-greeting sdds-headline-02">Welcome to</span>
            <span class="page-title sdds-headline-02">SDDS Vue Demo</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
.sdds-header {
  background-color: var(--sdds-blue-900);
  height: 16rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid var(--sdds-blue-800);
  color: var(--sdds-white);
  box-sizing: content-box;
}

.scania-symbol {
  padding: var(--sdds-spacing-element-16) var(--sdds-spacing-element-40);
  display: block;
  cursor: pointer;
  background: var(--sdds-background-image-scania-symbol-svg);
  background-size: 7.5rem auto;
  background-position: center;
  background-repeat: no-repeat;
  flex-grow: 1;
}

@media (min-width: 1056px) {
  .scania-symbol {
    order: 2;
    flex-grow: unset;
    border-left: 1px solid var(--sdds-blue-800);
  }
}

.sdds-content-header {
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  background-color: var(--sdds-blue-900);
  padding-bottom: var(--sdds-spacing-element-40);
  height: 48rem;
  margin-top: 0;
}

.header-greeting {
  color: var(--sdds-blue-300);
}

.page-title {
  display: flex;
  color: var(--sdds-white);
  margin-top: var(--sdds-spacing-element-8);
}
</style>
