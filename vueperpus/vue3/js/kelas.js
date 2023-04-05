var Kelas = {
  template : `
  <div class = "container">
    <div class="card">
      <div class="card-body">
        <h2 align="center">-- Data Kelas --</h2>
          <table class="table tale-hover table-stripped">
            <thead>
              <tr>
                <th>NO</th>
                <th>Nama Kelas</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(kelas,index) in datakelas">
                <td>{{index+1}}</td>
                <td>{{kelas.nama_kelas}}</td>
                <td><button class="btn btn-outline-dark"
                v-on:click="hapus(kelas.id_kelas)">Delete</button></td>
              </tr>
            </tbody>
          </table>
          <a href="#/tambahkelas" class="btn btn-outline-dark">Tambah Kelas</a>
        </div>
      </div>
    </div>`,
  data(){
    return {
      datakelas:[],
    }
  },
  methods: {
    async getkelas(){
      var res = await axios.get("http://localhost/perpus/public/api/getKelas");
      console.log(res);
      this.datakelas = res.data;
    },
    async hapus(id){
      var res = await axios.delete("http://localhost/perpus/public/api/delete_kelas/"+id);
      console.log(res);
      this.$router.push('/kelas');
      this.getkelas();
  }
  },
  async mounted(){
    this.getkelas();
  }
};