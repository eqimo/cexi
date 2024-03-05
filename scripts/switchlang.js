function switchLanguage(lang) {
  var navA = document.getElementById("nav-a-1");
  var navB = document.getElementById("nav-a-2");
  var navC = document.getElementById("nav-a-3");
  var serviceTitleA = document.getElementById("header");
  var serviceTitleB = document.getElementById("header-2");
  var serviceTitleC = document.getElementById("header-3");
  var serviceTitleD = document.getElementById("header-4");
  var paraA = document.getElementById("para-1");
  var paraB = document.getElementById("para-2");
  var paraC = document.getElementById("para-3");
  var paraD = document.getElementById("para-4");
  var paraE = document.getElementById("para-5");
  var paraF = document.getElementById("para-6");
  var showMoreButton = document.getElementById("showmorebutton");
  var showLessButton = document.getElementById("showlessbutton");
  var contactButton = document.getElementById("contactButton");
  var messageButton = document.getElementById("messagebutton");
  var liA = document.getElementById("li-1");
  var liB = document.getElementById("li-2");
  var liC = document.getElementById("li-3");
  var liD = document.getElementById("li-4");
  var liE = document.getElementById("li-5");
  var liH = document.getElementById("li-8");
  var liI = document.getElementById("li-9");

  if (lang === "en") {
    navA.innerHTML = "gallery";
    navB.innerHTML = "about Us";
    navC.innerHTML = "contact";
    serviceTitleA.innerHTML = "Our services";
    serviceTitleB.innerHTML = "Why to choose us";
    serviceTitleC.innerHTML = "Contact us";
    serviceTitleD.innerHTML = "Our gallery";
    paraA.innerHTML =
      "Welcome! We are an experienced group focused on bag design, offering the production of women's handbags and various other types. We can fulfill orders of any material, complexity, and quality.";
    paraB.innerHTML =
      "The key of our success lies in our unwavering commitment to hard work and a focus on customer satisfaction.";
    paraC.innerHTML =
      "Each experienced member of our team plays a crucial role in achieving this goal. ";
    paraD.innerHTML =
      "With a rich legacy spanning 25 years, our workshop holds a steadfast position in the Georgian market.";
    paraE.innerHTML =
      "We collaborate with numerous stores and companies across Georgia.";
    paraF.innerHTML =
      "you can contact us due to whats up or viber applications or message us on websitte, you can also visit our factory.";
    showMoreButton.innerHTML = "Show more";
    showLessButton.innerHTML = "Show less";
    contactButton.innerHTML = "contact us";
    messageButton.innerHTML = "send message";
    liA.innerHTML =
      "You tell us what material, design, or complexity you want, and we create it for you";
    liB.innerHTML = "We help you create the desired design.";
    liC.innerHTML = "We create individual handbags for different stores.";
    liD.innerHTML =
      "We specialize in crafting durable, professional-specific bags for companies.";
    liE.innerHTML = "we can produce 500 bag per week";
    liH.innerHTML = "or contact us on messenger";
    liI.innerHTML =
      "Prices start at 8₾ for grocery bags, 18₾ for small bags, and 25₾ for big handbags. The prices vary based on the quantity of bags you wish to order.";
  } else if (lang === "ka") {
    navA.innerHTML = "გალერეა";
    navB.innerHTML = "ჩვენს შესახებ";
    navC.innerHTML = "კონტაქტი";
    serviceTitleA.innerHTML = "ჩვენი სერვისი";
    serviceTitleB.innerHTML = "რატომ უნდა აირჩიოთ ჩვენი სამკერვალო?";
    serviceTitleC.innerHTML = "კონტაქტი";
    serviceTitleD.innerHTML = "ჩვენი გალერეა";
    paraA.innerHTML =
      "მოგესალმებით, ჩვენ ვართ გამოცდილი ჯგუფი, რომელიც ორიენტირებულია ჩანთის შექმნაზე. ჩვენ გთავაზობთ, როგორც ქალის ხელჩანთის, ასევე სხვადასხვა ტიპის ჩანთების დამზადებას. ვამზადებთ ნებისმიერი მატერიის, სირთულისა და ხარისხის შეკვეთებს.";
    paraB.innerHTML =
      "ჩვენი წარმატების გასაღები არის მუდმივი შრომა და ფოკუსირება კლიენტის კმაყოფილებაზე. ";
    paraC.innerHTML =
      "ამის განხორციელებაში წვლილი შეაქვს ჩვენი ჯგუფის თითოეულ გამოცდილ თანამშრომელს.";
    paraD.innerHTML =
      "ჩვენი საამქრო 25 წელია ამზადებს ჩანთებს და სტაბილურად გვიკავია ადგილი ქართულ ბაზარზე.";
    paraE.innerHTML =
      "ჩვენ ვთანამშრომლობთ სხვადასხვა მაღაზიებთან და კომპანიებთან საქართვველოს მასშტაბით.";
    paraF.innerHTML =
      "შეგიძლიათ დაგვიკავშირდეთ ტელეფონის მეშვეობით, ან მოგვწეროთ ან გვეწვვიოთ ჩანთების საამქროში";
    showMoreButton.innerHTML = "მეტის ჩვენება";
    showLessButton.innerHTML = "ნაკლების ჩვენება";
    contactButton.innerHTML = "კონტაქტი";
    messageButton.innerHTML = "წერილის გაგზავნა";
    liA.innerHTML =
      "თქვენ გვიყვებით რა მატერიალის, დანიშნულების ან გამძლეობის ჩანთა გინდათ, ჩვენ ვკერავთ.";
    liB.innerHTML = "გეხმარებით სასურველი დიზაინის შექმნაში.";
    liC.innerHTML = "ვქმნით ინდივიდუალურ ხელჩანთებს სხვადასხვა მაღაზიებისთვის.";
    liD.innerHTML =
      "ვამზადებთ გამძლე პროფესიულ-სპეციფიკურ ჩანთებს კომპანიებისთვის.";
    liE.innerHTML = "შეგვიძლია ვაწარმოოთ კვირაში 500 ჩანთა";
    liH.innerHTML = "ან მოგვწერეთ მესენჯერში";
    liI.innerHTML =
      "ფასები იწყება 8 ₾-დან სასურსათო ჩანთებზე, პატარა ზომის ჩანთების-18 ₾-დან, დიდი ზომის-25 ₾-დან. ფასები დამოკიდებულია შეკვეთილი ჩანთების რაოდენობაზე";
  }
}
