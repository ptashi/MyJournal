"use client"

type JournalPanelProps = {
  journalText: string;
  setJournalText: (text: string) => void
}

export default function JournalPanel({ journalText, setJournalText }: JournalPanelProps) {
  return (
    <div className="flex flex-col bg-paper rounded-xl h-full">
      <div className="text-4xl font-semibold text-coffee text-center py-10 font-fredoka">Journal</div>
      <textarea
        value={journalText}
        onChange={(e) => setJournalText(e.target.value)}
        className="flex-1 mx-10 mb-10 px-5 text-xl leading-7 outline-none resize-none rounded"
        style={{
            backgroundImage: "linear-gradient(to bottom, transparent 27px, #d4c4b0 27px)",
            backgroundSize: "100% 28px",
        }}
        placeholder="Write today's entry..."
      />
    </div>
  );
}