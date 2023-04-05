var Tambahkelas = {
    template : `
    <div class = "container">
    <div class="card">
      <div class="card-body">
        <h2 align = "center">Tambah Kelas</h2>
            <form v-on:submit="simpan()">
                <div id="content" class="p-4 p-md-5">
        	        <br>Nama Kelas :
                    <input v-model="nama_kelas" type = "text" name = "nama_kelas" value = "" class = "form-control" >
                    <br><button class="btn btn-dark" type="submit" name="simpan">Tambah Customer</button>
                </div>
            </form>
        </div>
    </div>
    </div>`,
    data(){
        return {
            nama_kelas: '',
        }
    },
    methods:{
        async simpan(){
            var data ={
                nama_kelas:this.nama_kelas,
            };
            var res = await axios.post("http://localhost/perpus/public/api/createkelas", data);
            console.log(res);
            if(res.data.status==true){
                this.alert=true;
                this.message=res.data.message;
                this.style_alert='alert alert-success';
                setTimeout(()=>{
                    this.$router.push('/kelas')
                },2000)
            }else{
                this.alert=true;
                this.message=res.data.message;
                this.style_alert='alert alert-danger';
            }
        }
    }
};