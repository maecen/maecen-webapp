(function(){
angular.module("localization", ["pascalprecht.translate"])
.config(function ($translateProvider) {
  // Set default (preffered) language
  $translateProvider.preferredLanguage('da');

  /*======================================= DANISH TRANSLATION ==============*/
  $translateProvider.translations('da', {
    AppTitle: "Mæcen",
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
    CreateProjectBTN: "Opret projekt"
    /*======== /create projects ======*/

  });

  /*======================================= English TRANSLATION ==============*/
  $translateProvider.translations('eng', {
    AppTitle: "Maecen",
    /*======= Registration ========*/
    NameAndSurname: "First and lastname",
    ContactInfo: "Contact information",
    FirstName: "Firstname",
    LastName: "Lastname",
    MailExample: "johndoe@gmail.com",
    Passwrd: "Password",
    ConfirmPasswrd: "Confirm password",
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

})();
