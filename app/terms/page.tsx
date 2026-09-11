export const metadata = {
  title: "Terms of Service — OpenPathAI",
  description: "Syarat dan ketentuan penggunaan layanan OpenPathAI.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-neutral-500">
        Terakhir diperbarui: {new Date().getFullYear()}
      </p>

      <div className="mt-10 space-y-8 text-neutral-300">
        <div>
          <h2 className="text-xl font-semibold text-white">
            1. Penerimaan Syarat
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Dengan mengakses situs dan model OpenPathAI, Anda menyetujui syarat
            dan ketentuan ini. Jika Anda tidak setuju, mohon untuk tidak
            menggunakan layanan kami.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            2. Penggunaan Model
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Model AI OpenPathAI dirilis dengan lisensi terbuka (MIT / Apache
            2.0) dan dapat digunakan untuk keperluan riset maupun komersial.
            Pengguna bertanggung jawab penuh atas penggunaan model dan hasil
            yang dihasilkan.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            3. Larangan Penggunaan
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Pengguna dilarang menggunakan model OpenPathAI untuk:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-neutral-400">
            <li>Kegiatan ilegal atau melanggar hukum yang berlaku.</li>
            <li>
              Menghasilkan konten yang menyesatkan, berbahaya, atau melanggar
              hak pihak lain.
            </li>
            <li>
              Menyebarkan malware, spam, atau konten yang merugikan pengguna
              lain.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            4. Kekayaan Intelektual
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Nama, logo, dan identitas merek OpenPathAI dilindungi. Kode dan
            bobot model mengikuti lisensi masing-masing yang tercantum pada
            kartu model di Hugging Face.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            5. Batasan Tanggung Jawab
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Model dan layanan disediakan &ldquo;sebagaimana adanya&rdquo;
            tanpa jaminan apa pun. OpenPathAI tidak bertanggung jawab atas
            kerugian langsung maupun tidak langsung yang timbul dari
            penggunaan model.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            6. Perubahan Syarat
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Kami berhak mengubah syarat ini kapan saja. Versi terbaru akan
            selalu tersedia di halaman ini.
          </p>
        </div>
      </div>
    </section>
  );
}
