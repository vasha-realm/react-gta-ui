import { NumberLed } from "@/vasha-react-kit/src/components";

type VehiclePanelProps = {
  classNames?: string;
};

type SpeedPanelProps = {
  classNames?: string;
};

type GasAndEnginePanelProps = {
  classNames?: string;
};

const GasAndEnginePanel = (gasAndEnginePanelProps: GasAndEnginePanelProps) => {
  const { classNames } = gasAndEnginePanelProps;
  const R = 48
  const storkeWidth = 3
  const chordToCenter = 35
  const halfChord = Math.sqrt(R ** 2 - chordToCenter ** 2)
  const arcStart = `${50 - halfChord} ${50 + chordToCenter}`
  const arcEnd = `${50 + halfChord} ${50 + chordToCenter}`


  // stroke-dasharray: 229;
  const dashArray = 229
  return (
    <div className={`${classNames}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0">
        {/* gas and engine base */}
        <path
          className={`fill-none stroke-[#8c8d91]`}
          style={{ strokeWidth: storkeWidth }}
          d={`M${arcStart}, A${R} ${R} 0 1 1 ${arcEnd}`}
        />

        {/* gas value */}
        <path
          className={`fill-none stroke-[#fff]`}
          style={{ strokeWidth: storkeWidth }}
          d={`M${arcStart}, A${R} ${R} 0 1 1 ${arcEnd}`}
          strokeDasharray={dashArray}
          strokeDashoffset={140}
        />

        {/* gas value */}
        <path
          className={`fill-none stroke-[#fff]`}
          style={{ strokeWidth: storkeWidth }}
          d={`M${arcStart}, A${R} ${R} 0 1 1 ${arcEnd}`}
          strokeDasharray={dashArray}
          strokeDashoffset={-180}
        />
      </svg>


      {/* gas icon */}
      <svg viewBox="0 0 512 512" className="absolute bottom-[10%] left-[20%] -translate-x-1/2 translate-y-1/2 w-[1.5rem] aspect-square fill-white">
        <path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64l0 192 8 0c48.6 0 88 39.4 88 88l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-154c-27.6-7.1-48-32.2-48-62l0-64L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3l0 13.5 0 24 0 32 0 152c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-32c0-22.1-17.9-40-40-40l-8 0 0 144c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64zM96 80l0 96c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16L112 64c-8.8 0-16 7.2-16 16z" />
      </svg>

      {/* engine icon */}
      <svg viewBox="0 0 512 512" className="absolute bottom-[10%] right-[20%] translate-x-1/2 translate-y-1/2 w-[1.5rem] aspect-square fill-white">
        <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
      </svg>
    </div>
  )
}

const SpeedPanel = (speedPanelProps: SpeedPanelProps) => {
  const { classNames } = speedPanelProps;
  const R = 38
  const storkeWidth = 3
  const chordToCenter = 28
  const halfChord = Math.sqrt(R ** 2 - chordToCenter ** 2)
  const arcStart = `${50 - halfChord} ${50 + chordToCenter}`
  const arcEnd = `${50 + halfChord} ${50 + chordToCenter}`

  const speed = `030`

  const getSqrt = (r: number, h: number) => Math.sqrt(r ** 2 - h ** 2)
  return (
    <div className={`${classNames}`}>

      {/* speed number */}
      <div className="absolute size-full flex flex-col items-center justify-center">
        <span>MPH</span>
        <NumberLed num={speed} classNames="h-[5rem] mb-[1rem]" />
        <div className="border-[.1rem] rounded-full w-[2.5rem] aspect-square flex items-center justify-center">
          <svg viewBox="0 0 1024 1024" className="size-9/12">
            <path d="M501.76 450.56a168.96 168.96 0 1 1 0-337.92 168.96 168.96 0 0 1 0 337.92zM778.24 849.92H306.54464l461.29152-407.06048a31.21152 31.21152 0 0 0 10.40384-24.04352 30.72 30.72 0 0 0-51.03616-21.99552l-94.208 83.1488a307.2 307.2 0 0 0-434.5856 228.84352 31.98976 31.98976 0 0 0-0.4096 4.21888l-3.44064 166.95296a30.72 30.72 0 0 0 30.72 31.37536H778.24a30.72 30.72 0 0 0 0-61.44z m-45.62944-280.33024a30.72 30.72 0 0 0-23.9616 7.45472l-239.616 211.43552H778.24a30.72 30.72 0 0 0 30.72-30.72 305.68448 305.68448 0 0 0-54.84544-175.18592 30.76096 30.76096 0 0 0-21.54496-12.98432z" fill="#fff" />
          </svg>
        </div>
      </div>

      {/* speed value */}
      <svg viewBox="0 0 100 100" className="absolute inset-0">
        <path
          className={`fill-none ${storkeWidth} stroke-[#8c8d91]`}
          style={{ strokeWidth: storkeWidth }}
          d={`M${arcStart}, A${R} ${R} 0 1 1 ${arcEnd}`}
        />
      </svg>

      {/* speed base */}
      <svg viewBox="0 0 100 100" className="absolute inset-0">
        <path
          className={`fill-none ${storkeWidth} stroke-[#8c8d91]`}
          style={{ strokeWidth: storkeWidth }}
          d={`M${arcStart}, A${R} ${R} 0 1 1 ${arcEnd}`}
        />
      </svg>

      {/* speed marks */}
      <NumberLed num={`10`} style={{ top: `${50 + 20}%`, left: `${50 - getSqrt(30, 20)}%` }} classNames="absolute -translate-x-1/2 -translate-y-1/2 h-[1rem]" />
      <NumberLed num={`210`} style={{ top: `${50 + 20}%`, left: `${50 + getSqrt(30, 20)}%` }} classNames="absolute -translate-x-1/2 -translate-y-1/2 h-[1rem]" />

      <NumberLed num={`30`} style={{ top: `${50 + 10}%`, left: `${50 - getSqrt(30, 10)}%` }} classNames="absolute -translate-x-1/2 -translate-y-1/2 h-[1rem]" />
      <NumberLed num={`190`} style={{ top: `${50 + 10}%`, left: `${50 + getSqrt(30, 10)}%` }} classNames="absolute -translate-x-1/2 -translate-y-1/2 h-[1rem]" />

      <NumberLed num={`50`} style={{ top: `${50 - 3}%`, left: `${50 - getSqrt(30, 3)}%` }} classNames="absolute -translate-x-1/2 -translate-y-1/2 h-[1rem]" />
      <NumberLed num={`170`} style={{ top: `${50 - 3}%`, left: `${50 + getSqrt(30, 3)}%` }} classNames="absolute -translate-x-1/2 -translate-y-1/2 h-[1rem]" />

      <NumberLed num={`70`} style={{ top: `${50 - 15}%`, left: `${50 - getSqrt(30, 15)}%` }} classNames="absolute -translate-x-1/2 -translate-y-1/2 h-[1rem]" />
      <NumberLed num={`150`} style={{ top: `${50 - 15}%`, left: `${50 + getSqrt(30, 15)}%` }} classNames="absolute -translate-x-1/2 -translate-y-1/2 h-[1rem]" />

      <NumberLed num={`90`} style={{ top: `${50 - 25}%`, left: `${50 - getSqrt(30, 25)}%` }} classNames="absolute -translate-x-1/2 -translate-y-1/2 h-[1rem]" />
      <NumberLed num={`130`} style={{ top: `${50 - 25}%`, left: `${50 + getSqrt(30, 25)}%` }} classNames="absolute -translate-x-1/2 -translate-y-1/2 h-[1rem]" />

      <NumberLed num={`110`} style={{ top: `${50 - 30}%`, left: `${50}%` }} classNames="absolute -translate-x-1/2 -translate-y-1/2 h-[1rem]" />
    </div>
  )

}
const VehiclePanel = (vehiclePanelProps: VehiclePanelProps) => {
  const { classNames } = vehiclePanelProps;
  const arr = Array.from({ length: 11 }, (_, i) => i);
  return (
    <div className={`${classNames}`}>
      {/* <svg viewBox="0 0 100 100" className="absolute inset-0 z-10">
        {arr.map((idx) => (<path key={idx} className="stroke-1 stroke-[var(--tc)]" d={`m0 ${idx * 10} h100`} />))}
        {arr.map((idx) => (<path key={idx} className="stroke-1 stroke-[var(--tc)]" d={`m${idx * 10} 0 v100`} />))}
      </svg> */}

      <GasAndEnginePanel classNames="absolute inset-0 z-20" />
      <SpeedPanel classNames="absolute inset-0 z-30" />
    </div>
  );
};

export default VehiclePanel;
