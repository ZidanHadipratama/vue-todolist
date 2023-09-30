<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
:root{
  --red: rgb(237, 106, 94);
  --green: rgb(97, 195, 84);
  --yellow: rgb(245, 189, 80);
  --putih: #ffffff;
  --blue: rgba(55, 68, 189, 1);
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


.flex{
  display: flex;
}

.column{
  flex-direction: column;
}

.column-reverse{
  flex-direction: column-reverse;
}

.flex-reverse{
  flex-direction: row-reverse;
}

.xcenter{
  justify-content: center;
}

.ycenter{
  align-content: center;
  align-items: center;
}

.basic-shadow{
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.power-shadow{
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}

.round{
  border-radius: 10px;
}

.extreme-round{
  border-radius: 30px;
}

.text-red{
  color: var(--red);
}

.text-green{
  color: var(--green);
}

.text-yellow{
  color: var(--yellow);
}

.text-blue{
  color: var(--blue)
}

.text-putih{
  color: var(--putih)
}

.bg-red{
  background-color: var(--red);
  border:2px solid var(--putih);
}

.bg-green{
  background-color: var(--green);
  border:2px solid var(--putih);
}

.bg-yellow{
  background-color: var(--yellow);
  border:2px solid var(--putih);
}

.bg-blue{
  background-color: var(--blue);
  border:2px solid var(--putih);
}

.border-red{
  background-color: var(--putih);
  border:2px solid var(--red);
}

.border-yellow{
  background-color: var(--putih);
  border:2px solid var(--yellow);
}

.border-green{
  background-color: var(--putih);
  border:2px solid var(--green);
}

.border-blue{
  background-color: var(--putih);
  border:2px solid var(--blue);
}

.button{
  padding: 4px 8px;
  font-size: 12px;
  transition: 0.5s;
  font-weight: 800;
}

.button:hover{
  scale: 1.2;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
