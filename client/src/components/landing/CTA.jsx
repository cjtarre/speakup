import Button from "../ui/Button";

function CTA() {
  return (
    <section
      id="cta"
      className="bg-violet-600 px-6 py-20 text-center text-white"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold">
          Ready to rebuild your voice?
        </h2>

        <p className="mt-4 text-lg text-violet-100">
          Practice interviews, presentations, project defenses,
          and impromptu speeches with confidence.
        </p>

        <div className="mt-8">
          <Button variant="secondary">
            Start Practicing
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;