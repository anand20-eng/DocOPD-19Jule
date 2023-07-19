import {
    SignUp, SignIn, ForgetPassword, Home, AddPatient, Organization,
    SearchPatient, DoctorCompounder,DrawerMain, DrawerMenu,DoctorDrawer,
    AddDoctorCompounder, MedicineDiscrepanies, SearchedPatient
} from '../Containers';
export const routes = {
    SignUpScreen: {
        name: "SingUp", component: SignUp
    },
    SignInScreen: {
        name: "SignIn", component: SignIn
    },
    ForgetPasswordScreen: {
        name: "ForgetPassword", component: ForgetPassword
    },
    HomeScreen: {
        name: "Home", component: Home
    },
    AddPatientScreen: {
        name: "Add Patient", component: AddPatient
    },
    SearchPatientScreen: {
        name: "Search Patient", component: SearchPatient
    },
    OrganizationScreen: {
        name: "Organization", component: Organization
    },
    DoctorCompounderScreen: {
        name: "Doctor/Compounder", component: DoctorCompounder,

    },
    AddDoctorCompounderScreen: {
        name: "AddDoctor/Compounder", component: AddDoctorCompounder
    },
    MedicineDiscrepaniesScreen: {
        name: "Medicine", component: MedicineDiscrepanies
    },
    DrawerMainScreen: {
        name: "DrawerMain", component: DrawerMain
    },
    DrawerMenuScreen: {
        name: "DrawerMenu", component:  DrawerMenu
    },
    DoctorDrawerScreen: {
        name: "DoctorDrawer", component:  DoctorDrawer
    },


}
