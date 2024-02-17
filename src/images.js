const image = (path) => require(`./images/${path}`);
const video = (path) => require(`./images/${path}`);

export default {
  //Social Media icons
  facebook: image("facebook.png"),
  instagram: image("instagram.png"),

  //Logos
  logo: image("blue-logo.png"),
  flowerLogo: image("flower-logo.png"),

  //Frontpage Image
  indexLotus: image("startPage-dator.jpg"),
  indexLotusMobile: image("startPage-mobil.jpg"),

  //Menu photos
  breakfast: image("mat/frukost1.jpg"),
  lunch: image("mat/lunch-dator(FC).jpg"),
  coldsandwich: image("mat/coldSandwich-dator.jpg"),
  warmsandwich: image("mat/warmSandwich-dator.jpg"),
  food: image("mat/food-dator.jpg"),
  snacks: image("mat/snacks-dator.jpg"),
  drinks: image("drinks-dator.jpg"),

  //Frida och Cecilia
  fridaOchCecilia: image("frida&cecilia2.jpg"),

  //Gallery photos
  img1: image("startPage-dator.jpg"),
  img2: image("2Lotus4-dator.jpg"),
  img3: image("2Lotus91.jpg"),
  img4: image("2Lotus93.jpg"),
  img5: image("2Lotus98.jpg"),
  img6: image("2Lotus992.jpg"),
  img7: image("frida&cecilia.jpg"),
  img8: image("frontImage.jpg"),
  img9: image("mat/lunch-dator(josefin).jpg"),
  img10: image("mat/snacks-dator.jpg"),

  // Rental photos
  plocktallrik: image("mat/plocktallrik.JPG"),
  bar: image("mat/drinks-mobil.jpg"),

  //Rental Gallery photos
  rentalImg1: image("lokal/rental7(filip).JPG"),
  rentalImg2: image("lokal/rental6(filip).JPG"),
  rentalImg3: image("lokal/rental1.JPG"),

  // Video
  rentalVideo: video("lokal/246c62a4-371c-4b8b-bb3f-67dd8b93f128.MP4"),
};
