import ColoredLed from './ColoredLeds';
import Bars from './Bars';
import Pikachu from './img/pokemon_PNG33.png';
const PokeScreen = () => {
  return (
    <section className="screen-wrapper">
      <div className="screen-leds">
        <ColoredLed w="11px" h="11px" bcolor="#FA0707" border="" radius="50%" margin="0px 10px " />
        <ColoredLed w="11px" h="11px" bcolor="#FA0707" border="" radius="50%" margin="0px 10px " />
      </div>
      <div className="beeboop-leds">
        <ColoredLed
          w="80px"
          h="80px"
          bcolor="#10ABED"
          border="2px solid #fff"
          radius="50%"
          margin=""
        />
        <ColoredLed
          w="21px"
          h="21px"
          bcolor="#FA0707"
          border=""
          radius="50%"
          margin="-10px 6px 0px"
        />
        <ColoredLed
          w="21px"
          h="21px"
          bcolor="#D8DC13"
          border=""
          radius="50%"
          margin="-10px 6px 0px"
        />
        <ColoredLed
          w="21px"
          h="21px"
          bcolor="#25FA02"
          border=""
          radius="50%"
          margin="-10px 6px 0px"
        />
      </div>
      <div className="screen">
        <img src={Pikachu} alt="" />
      </div>
      <div className="vents-wrapper">
        <Bars />
        <Bars />
      </div>
    </section>
  );
};

export default PokeScreen;
