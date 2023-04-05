var Anggota = {
  template : `
  <div class = "container">
    <div class="card">
      <div class="card-body">
        <h2 align="center">-- Data Anggota --</h2>
          <table class="table tale-hover table-stripped">
            <thead>
              <tr>
                <th>NO</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>telp</th>
                <th>Kelas</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(anggota,index) in dataanggota">
                <td>{{index+1}}</td>
                <td>{{anggota.nama}}</td>
                <td>{{anggota.alamat}}</td>
                <td>{{anggota.telp}}</td>
                <td>{{anggota.nama_kelas}}</td>
                <td><a v-bind:href="'#/editanggota/'+anggota.id_anggota" class="btn btn-dark">Edit</a> | <button class="btn btn-outline-dark"
                        v-on:click="hapus(anggota.id_anggota)">Delete</button></td>
              </tr>
            </tbody>
          </table>
          <a href="#/tambahanggota" class="btn btn-outline-dark">Tambah</a>
        </div>
      </div>
    </div>`,
  data(){
    return {
      dataanggota:[],
    }
  },
  methods: {
    async getanggota (){
      var res = await axios.get("http://localhost/perpus/public/api/getAnggota");
      console.log(res);
      this.dataanggota = res.data;
    },
    async hapus(id){
      var res = await axios.delete("http://localhost/perpus/public/api/delete_anggota/"+id);
      console.log(res);
      this.$router.push('/anggota');
      this.getanggota();
  }
  },
  async mounted(){
    this.getanggota();
  }
};