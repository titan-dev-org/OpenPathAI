export const metadata = {
  title: "Privacy Policy — OpenPathAI",
  description: "Kebijakan privasi OpenPathAI.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:px-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-sm text-neutral-500">
        Terakhir diperbarui: {new Date().getFullYear()}
      </p>

      <div className="mt-10 space-y-8 text-neutral-300">
        <div>
          <h2 className="text-xl font-semibold text-white">
            1. Informasi yang Kami Kumpulkan
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            OpenPathAI tidak mengumpulkan data pribadi pengguna pada situs ini
            secara langsung. Semua model AI kami dirilis melalui Hugging Face,
            dan penggunaan model tunduk pada kebijakan privasi Hugging Face.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            2. Penggunaan Data
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Kami tidak menjual, menyewakan, atau membagikan data pengguna
            kepada pihak ketiga. Data apa pun yang dikirim melalui kanal
            komunikasi resmi kami hanya digunakan untuk keperluan dukungan
            dan komunikasi.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">3. Log Server</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Seperti situs web pada umumnya, penyedia hosting kami dapat mencatat
            log akses standar (alamat IP, user agent, waktu akses) untuk
            keperluan keamanan dan analitik. Log ini tidak dihubungkan dengan
            identitas pribadi.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">4. Cookies</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Situs ini tidak menggunakan cookies untuk pelacakan iklan. Cookies
            teknis yang diperlukan untuk fungsionalitas situs dapat digunakan
            secara minimal.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            5. Perubahan Kebijakan
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Kami dapat memperbarui kebijakan ini dari waktu ke waktu.
            Perubahan akan dipublikasikan di halaman ini dengan tanggal
            pembaruan terbaru.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">6. Kontak</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Untuk pertanyaan terkait privasi, hubungi kami melalui Hugging
            Face:{" "}
            <a
              href="https://huggingface.co/OpenPathAI"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              huggingface.co/OpenPathAI
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
