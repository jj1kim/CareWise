import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { default as Canvas } from "../components/Canvas/index.jsx";

import careLabelSample from "../assets/images/icons/carelabel-sample.png";
import uploadLogo from "../assets/images/icons/material-symbols_upload.png";

import { Loading, RecogFail } from "../components/Modal/index.jsx";

const LabelExPage = () => {
  const navigate = useNavigate();

  const [isLoading, setisLoading] = useState(false);

  return (
    <>
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-[1440px] h-[1389px] relative">
          <div className="absolute w-[822px] top-[39px] left-[110px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f3f3f] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            케어라벨 세탁기호 분석하기
          </div>
          {/*group 18 in figma*/}
          <div className="absolute w-[1221px] h-[494px] top-[145px] left-[109px] bg-white rounded-[20px] border-2 border-solid border-[#a4a3a3] shadow-[0px_4px_4px_#00000033]">
            <div className="flex flex-col w-[729px] items-start gap-1.5 pl-[85px] pr-0 pt-[50px] pb-0 absolute -top-0.5 -left-px">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f3f3f] text-[32px] tracking-[0] leading-[normal]">
                사진 분석
              </div>
              <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] text-[21.5px] tracking-[0] leading-[normal]">
                케어라벨에 그려져 있는 세탁기호의 사진을 찍어서 업로드해보세요!
              </p>
            </div>
            <img
              className="absolute w-[498px] h-[284px] top-[158px] left-[88px] object-cover"
              alt="carelabel sample"
              src={careLabelSample}
            />
            <button
              onClick={() => {
                navigate("/label-ex-result");
              }}
              className="flex flex-col w-[421px] h-[67px] items-center justify-center gap-2.5 px-[133px] py-[18px] absolute top-[261px] left-[710px] bg-[#b5b5b5] rounded-lg"
            >
              <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                <img
                  className="relative w-[31px] h-[31px]"
                  alt="Material symbols"
                  src={uploadLogo}
                />
                <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-5 whitespace-nowrap">
                  사진 업로드
                </div>
              </div>
            </button>
          </div>
          {/*group 21 in figma*/}
          <div className="absolute w-[1221px] h-[588px] top-[729px] left-[109px] bg-white rounded-[20px] border-2 border-solid border-[#a4a3a3] shadow-[0px_4px_4px_#00000033]">
            <div className="flex flex-col w-[729px] h-36 items-start gap-1.5 pl-[85px] pr-0 pt-[50px] pb-0 absolute -top-0.5 -left-px">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#3f3f3f] text-[32px] tracking-[0] leading-[normal]">
                그림 분석
              </div>
              <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#757575] text-[21.5px] tracking-[0] leading-[normal]">
                사진 인식이 어렵다면, 직접 그림을 그려서 업로드해보세요!
              </p>
            </div>

            {/*frame 51 in figma*/}
            <div className="inline-flex items-center gap-3 absolute top-[147px] left-[85px]">
              <Canvas />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Loading isLoading={isLoading} />
      </div>
    </>
  );
};

export default LabelExPage;
