import { useState } from "react";
import "./App.css";
import {
  ASCIImage,
  Block,
  Button,
  Input,
  Loader,
  Slider,
  Text,
  Select,
} from "v4console-ui";

function App() {
  const [sliderVal, setSliderVal] = useState(0);
  const [selectVal, setSelectVal] = useState(0);
  return (
    <Block
      title="block"
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <Block
        title="button"
        className="flex items-center justify-around flex-wrap"
      >
        <Button>Primary</Button>
        <Button options={{ type: "secondary" }}>Secondary</Button>
        <Button options={{ type: "outline" }}>Outline</Button>
      </Block>
      <Block
        title="text"
        className="flex items-center justify-around flex-wrap"
      >
        <Text>{`# Just a typography component
`}</Text>
      </Block>
      <Block
        title="input"
        className="flex items-center justify-around flex-wrap"
      >
        <Input />
      </Block>
      <Block
        title="ascii image"
        className="flex items-center justify-around flex-wrap"
      >
        <ASCIImage
          width={80}
          alt="parnishka"
          height={80}
          size={0.4}
          src={
            "https://sun9-13.userapi.com/impg/2FwGJIJ7ikaAD_6aNbk9C2oLywam0rAm2h3XIQ/wbSPRmm9SkY.jpg?size=1000x1000&quality=95&sign=352e11aa9cc67ec72479a81b7a7cd12f&type=album"
          }
        />
      </Block>
      <Block
        title="animated text"
        className="flex items-center justify-around flex-wrap"
      >
        <Text animated>{`# Just a typography component
`}</Text>
      </Block>
      <Block
        title="loader"
        className="flex items-center justify-around flex-wrap"
      >
        <Loader type="braile" />
        <Loader type="cross" />
        <Loader type="slash" />
      </Block>
      <Block
        title="slider"
        className="flex items-center justify-around flex-wrap"
      >
        <Slider
          size={12}
          width={25}
          max={1000}
          min={100}
          current={sliderVal}
          onChange={(e) => {
            setSliderVal(e);
          }}
        />
        <div>{sliderVal}</div>
      </Block>
      <Block
        title="select"
        className="flex items-center justify-around flex-wrap"
      >
        <Select
          value={selectVal}
          onChange={(e) => {
            setSelectVal(e);
          }}
          options={[
            { title: "Option 2", value: "1" },
            { title: "Option 1", value: "2" },
          ]}
        />
      </Block>
    </Block>
  );
}

export default App;
