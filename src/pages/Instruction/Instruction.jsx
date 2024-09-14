import React from 'react';
import './Instruction.scss';

const Instruction = () => {

    const paragraphs = [
        "Remove any nail polish or any product on your nails if any",
        "Push back cuticles with wooden cuticle stick",
        "File & shape your natural nails with mini file",
        "Wash hands thoroughly with soap and dry",
        "Buff nails slightly for better adhesion",
        "Open your Pretty nail set and select the correct nail sizes and set them to one side",
        "Apply a thin layer of glue to either your natural nails or the back of the false nails (or opt for our Super Adhesive Nail Tabs for a more gentle glue)",
        "Align the false nail to your cuticle and gently press & hold for 30 seconds",
        "Enjoy your Pretty nails!",
      ];
  return (
    <div className="instruction">
      <div className="top">
            <img src="/Instruction/Instruction.jpg" alt="" />
      </div>
      <div className="bottom">
        <h2>Application Instructions:</h2>
        <ul>
            {paragraphs.map((paragraph, index) => (
            <li key={index}>{paragraph}</li>  // Each paragraph as a list item
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Instruction;