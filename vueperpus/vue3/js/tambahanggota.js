var Tambahanggota = {
    template: `
    <div class="container mt-3">
        <div class="card">
            <div class="card-body">
                <h2 align="center"> Tambah Anggota </h2>
                <form v-on:submit="simpan()">
    
                    <div class="form-group">
                    <label for="nama">Nama Anggota</label>
                    <input v-model="nama" type="text" class="form-control" id="nama">
                    </div>
                    
                    <div class="form-group">
                    <label for="alamat">Alamat</label>
                    <input v-model="alamat" type="text" class="form-control" id="alamat">
                    </div>

                    <div class="form-group">
                    <label for="telp">No. Telepon</label>
                    <input v-model="telp" type="text" class="form-control" id="telp">
                    </div>

                    <div class="form-group">
                    <label for="kelas">Kelas</label>
                    <select  class="form-control" id="kelas" v-model="id_kelas">
                    <option></option>
                    <option v-for="kls in kelas" :key="kls.id_kelas" v-bind:value="kls.id_kelas">{{kls.nama_kelas}}</option>
                    </select>
                    </div>

                    <input type="submit" value="Submit" class="btn btn-outline-dark">
                </form>
                <div v-if="alert">
                    <div v-bind:class="style_alert">{{message}}</div>
                </div>
            </div>
        </div>
    </div>`,
    data(){
        return {
            nama: '',
            alamat: '',
            telp: '',
            kelas:[],
            id_kelas:'',
            alert: false,
            message: '',
            style_alert: '',
        }
    },
    methods:{
        async simpan(){
            var data ={
                nama:this.nama,
                alamat:this.alamat,
                telp:this.telp,
                id_kelas:this.id_kelas,
            };
            var res = await axios.post("http://localhost/perpus/public/api/createanggota", data);
            console.log(res);
            if(res.data.status==true){
                this.alert=true;
                this.message=res.data.message;
                this.style_alert='alert alert-success';
                setTimeout(()=>{
                    this.$router.push('/anggota')
                },2000)
            }else{
                this.alert=true;
                this.message=res.data.message;
                this.style_alert='alert alert-danger';
            }
        },
        async getkelas(){
            var res = await axios.get("http://localhost/perpus/public/api/getKelas");
            console.log(res);
            this.kelas=res.data;
        }

    },
    mounted(){
        this.getkelas();
    }
};