(function(){
angular.module("application")
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
    Password: "Adgangskode",
    ConfirmPassword: "Bekræft adgangskode",
    RegistrateBTN: "Registrer",

    /*======= Registration ========*/
    NameAndSurname: "Navn og efternavn",
    ContactInfo: "Kontakt information",
    FirstName: "Fornavn",
    LastName: "Efternavn",
    MailExample: "johndoe@gmail.com",
    Password: "Adgangskode",
    ConfirmPassword: "Bekræft adgangskode",
    RegistrateBTN: "Registrer",
    /*======= Registration ========*/

    /*======= Projects ============*/
    MenuProjects: "Alle projekter",
    MaecenGroups: "Mæcen grupper",
    /*======= /projects ============*/

    /*======== Create projects ======*/
    MenuNewProject: "Nyt projekt",
    CreateProjectTitel: "Opret projekt",
    NewProjectTitel: "Titel",
    ProjectLogo: "Logo",
    ProjectCategory: "Kategori",
    ProjectTeaser: "Teaser",
    MaxTeaserChars: "Max 140 karaktere",
    ProjectDescription: "Beskrivelse",
    ProjectUrl: "URL",
    ProjectCover: "Cover",
    CreateProjectBTN: "Opret projekt",
    /*======== /create projects ======*/

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
  $translateProvider.translations('en', {

  });

  /*======================================= English TRANSLATION ==============*/
  $translateProvider.translations('en', {
    AppTitle: "Maecen",
    /*======= Registration ========*/
    NameAndSurname: "First and last name",
    ContactInfo: "Contact information",
    FirstName: "First name",
    LastName: "Last name",
    MailExample: "johndoe@gmail.com",
    Password: "Password",
    ConfirmPassword: "Confirm password",
    RegistrateBTN: "Registrate",
    /*======= Registration ========*/

    /*======= Projects ============*/
    MenuProjects: "All projects",
    MaecenGroups: "Maecen groups",
    /*======= /projects ============*/

    /*======== Create projects ======*/
    MenuNewProject: "New project",
    CreateProjectTitel: "Create project",
    NewProjectTitel: "Title",
    ProjectLogo: "Logo",
    ProjectCategory: "Category",
    ProjectTeaser: "Teaser",
    MaxTeaserChars: "Max 140 characters",
    ProjectDescription: "Description",
    ProjectUrl: "URL",
    ProjectCover: "Cover",
    CreateProjectBTN: "Create project"
    /*======== /create projects ======*/
  });
})
.run(function($http, $translate) {
  $http.defaults.headers.common.locale = function(){ return $translate.use(); };
})

})();
