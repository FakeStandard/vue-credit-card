<template>
  <div class="card-group">
    <div class="card">
      <div class="logo"><img src="../assets/visa.png" alt="Visa" /></div>
      <div class="chip"><img src="../assets/chip.png" alt="Chip" /></div>
      <div class="number">8888 8888 8888 8888</div>
      <div class="name">RILEY LIN</div>
      <div class="ring"></div>
      <!-- <div class="from">02/11</div>
    <div class="to">08/21</div> -->
    </div>
  </div>
</template>

<style>
.card-group {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  position: relative;
  height: 270px;
  width: 450px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px); /* This will produce the blur */
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.logo img,
.chip img,
.number,
.name,
.from,
.to,
.ring {
  position: absolute; /* All items inside card should have absolute position */
}

.logo img {
  top: 35px;
  right: 40px;
  width: 80px;
  height: auto;
  opacity: 0.8;
}

.chip img {
  top: 120px;
  left: 40px;
  width: 50px;
  height: auto;
  opacity: 0.8;
}

.number,
.name {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  letter-spacing: 2px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
}

/* .number,
.name,
.from,
.to {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  letter-spacing: 2px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
} */

.number {
  left: 40px;
  bottom: 65px;
  font-family: "Nunito", sans-serif;
}

.name {
  font-size: 0.5rem;
  left: 40px;
  bottom: 35px;
}

/* .from {
  font-size: 0.5rem;
  bottom: 35px;
  right: 110px;
}

.to {
  font-size: 0.5rem;
  bottom: 35px;
  right: 40px;
} */

.ring {
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background: transparent;
  border: 50px solid rgba(255, 255, 255, 0.1);
  bottom: -250px;
  right: -250px;
  box-sizing: border-box;
}

.ring::after {
  content: "";
  position: absolute;
  height: 600px;
  width: 600px;
  border-radius: 50%;
  background: transparent;
  border: 30px solid rgba(255, 255, 255, 0.1);
  bottom: -80px;
  right: -110px;
  box-sizing: border-box;
}
</style>
