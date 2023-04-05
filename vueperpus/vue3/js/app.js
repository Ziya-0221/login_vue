// var Home = {template : '<div>halaman Home</div>'};
// var About = {template : "</div>halaman about</div>"};

var routes = [
    {path : '/', component: Home},
    {path : '/anggota', component: Anggota},
    {path : '/kelas', component: Kelas},
    {path : '/tambahkelas', component: Tambahkelas},
    {path : '/tambahanggota', component: Tambahanggota},
    {path : '/editanggota/:id', component: Editanggota},
    
    
];

var router= VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
var app = Vue.createApp({
    data(){
        return {
            judul: "Sinau vue3 ygy"
        }
    }
});
app.use(router)
app.mount('#app');