function RoundedButton(props) {
  return (
    <div>
      <button className="w-[228px] bg-Secondary text-[white] rounded-3xl px-[10px] mt-[20px] h-[30px] font-semibold">
        {props.title}
      </button>
    </div>
  );
}
export default RoundedButton;
