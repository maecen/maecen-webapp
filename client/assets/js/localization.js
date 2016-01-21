(function(){
angular.module("localization", ["pascalprecht.translate"])
.config(function ($translateProvider) {
  // Set default (preffered) language
  $translateProvider.preferredLanguage('da');

  /*======================================= DANISH TRANSLATION ==============*/
  $translateProvider.translations('da', {
    AppTitle: "Mæcen",

    /*======= Slidein menu ========*/
    MenuProjects: "Alle projekter",
    MenuNewProject: "Nyt projekt",
    SelectLanguage: "Vælg sprog",
    LangDa: "Dansk",
    LangEng: "Engelsk",
    /*======= /slidein menu ========*/

    /*======= Registration ========*/
    NameAndSurname: "Navn og efternavn",
    ContactInfo: "Kontakt information",
    FirstName: "Fornavn",
    LastName: "Efternavn",
    MailExample: "johndoe@gmail.com",
    Passwrd: "Adgangskode",
    ConfirmPasswrd: "Bekræft adgangskode",
    RegistrateBTN: "Registrer",
    /*======= Registration ========*/

    /*======= Projects ============*/
    MaecenGroups: "Mæcen grupper",
    /*======= /projects ============*/

    /*======== Create projects ======*/
    CreateProjectTitel: "Opret projekt",
    NewProjectTitel: "Titel",
    ProjectLogo: "Logo",
    ProjectCategory: "Kategori",
    ProjectTeaser: "Teaser",
    MaxTeaserChars: "Max 140 karaktere",
    ProjectDescription: "Beskrivelse",
    ProjectUrl: "URL",
    ProjectCover: "Cover",
    CreateProjectBTN: "Opret projekt"
    /*======== /create projects ======*/

  });

  /*======================================= English TRANSLATION ==============*/
  $translateProvider.translations('eng', {

  });


})

})();
