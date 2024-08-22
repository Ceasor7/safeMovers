const whatsAppButton = ({ onClick }) => {
  return (
    <button
      className="fixed bottom-4 right-4 z-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      Floating Button
    </button>
  );
};

export default whatsAppButton;
