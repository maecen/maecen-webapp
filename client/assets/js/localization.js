(function(){
angular.module("application")
.config(function ($translateProvider) {
  // Set default (preffered) language
  var language = window.localStorage['locale'] || 'en';
  $translateProvider.preferredLanguage(language);

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

    /*======= User Info ========*/
    NameAndSurname: "Navn og efternavn",
    ContactInfo: "Kontakt information",
    FirstName: "Fornavn",
    LastName: "Efternavn",
    MailExample: "johndoe@gmail.com",
    Password: "Adgangskode",
    ConfirmPassword: "Bekræft adgangskode",
    Country: "Land",
    PhoneNumber: "Telefonnummer",
    ZipCode: "Postnummer",

    /*======= Profile ========*/
    Register: "Registrer",
    EditButton: "Rediger profil",
    UpdateButton: "Opdater",
    CancelButton: "Annuller",
    SignIn: "Log in",
    SignOut: "Log ud",
    Profile: "Profil",

    /*======= Projects ============*/
    MenuProjects: "Alle projekter",
    MaecenGroups: "Mæcen grupper",
    CreateMaecenate: "Nyt Mæcenat",
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
    AllMaecenates: "Se alle Mæcenater",
    /*======= /projects ============*/

    /*======== Create projects ======*/
    CreateProjectTitel: "Nyt Mæcenat",
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
    Country: "Country",
    PhoneNumber: "Phone number",
    ZipCode: "Zip code",
    /*======= Registration ========*/

    /*======= Profile ========*/
    Register: "Register",
    EditButton: "Edit profile",
    SignIn: "Sign in",
    SignOut: "Sign out",
    UpdateButton: "Update",
    CancelButton: "Cancel",
    Profile: "Profile",

    /*======= Projects ============*/
    MenuProjects: "All projects",
    MaecenGroups: "Maecen groups",
    CreateMaecenate: "Create Maecenate",
    AllMaecenates: "See all Maecenates",
    /*======= /projects ============*/

    /*======== Create projects ======*/
    MenuNewProject: "New Maecenate",
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
