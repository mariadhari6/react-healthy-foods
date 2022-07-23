import React from "react";
import AppBar from "../components/AppBar";
import NutrientsChart from "../components/charts/NutrientsChart";
const Recipe = () => {
  return (
    <React.Fragment>
      <AppBar />
      <div className="max-w-7xl mx-auto px-4 gap-7 sm:px-6 my-7 grid grid-cols-1 md:grid-cols-11">
        <div className="md:col-span-6 col-span-1">
          <img
            className="w-full h-banner object-cover rounded-md"
            src="https://edamam-product-images.s3.amazonaws.com/web-img/b4a/b4ae00d32a239d3d78019cce21ae2c88.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLWVhc3QtMSJHMEUCIFFpdbP7i75ld9LUrjSUgcTAHs1kNRv0Vqc%2BYECD%2FERlAiEAsZkND4Qn5m84Ghwz4HUsxwaNhN3ianNY2VuTBatPuKIq0gQIbxAAGgwxODcwMTcxNTA5ODYiDK0KjzKbg%2BzjhezKaCqvBJ9y6JGog9DbJE8i%2BXwnPwUkXowPShMqsG50SIKfdqiU3ZpO7yoxFm%2FqZJoLsgLuN1iZ4IoFm3R5Wo5eTMK3dS%2BoCYh7EMmuxL4pxNOg9jaJUpt0uHqEEhmmlbyXmdFd2u%2BIHn23uqdbUURxKVILtKOQ3%2B0y7dz1ZvssJOtJtDixCpB%2FAcJWXeXr%2B4xkG7UG0AVXrY2WkqoSZa8ZNVcpCS2UAmgbCWY%2BxLeKPQEeWUZDCsp%2F2yyeXsxSFScc%2FIWPDM%2B6Nsy5usPA0KJkUYLIQgi1H1eSxnobD4dtkdMQ5pUDecOF6pdjG1AYQg6MRCLk3iSz01s%2FG5%2BTw1CQwCiuwllYLIPBEIQeTgz2r80JgUkgL0ClFdFDQplRuAhS23aYElvgzxgu%2F3iIeEerA%2FB0b3pPydJYUqhvTNSsi5RdJk6XNF4kMAnjT76zjoeFpg1DwTpYWXXV2vKzLFEX9gxHJQ%2FIvZW8ZNPrdLiEWRSS3KmNE1xwWPdDloLD%2F6gGOz%2BHeyjdlt98Iw7WccTYl3oQstFCGaMkoNugUDTgwL2okH%2BGFs4ZP5rCy1oSYi3abNwYb9D1KnUj1i6%2FCHIzwxaU3ueNdwOJ9JvMzkgvowQYn5%2BLRZscymjv7EyY83s0Ik3%2FmrSVCX0Oc3ZQtjpvkjlIKHmHhW3aC7bOEriKCF4NDb5w463NkHp7JjULTfBzv0LZhn3I%2Frar0CW4zeXM%2FM08YUeo%2BvJjWe0m0b97ZTAtsNswp57ulgY6qQEA1z21%2FhukdCXwKV0Ayuy227kLOPlxLJkj2nybaFsQlUYa0BJWh3vMDcFs9Diq6i3lSbOOWPMaVQl73Uj0a7wLuZXP3qvAOWT8jz%2Bno4Bey3PoLDymfkCUU87caZJ1dNZW%2F6Yyc1Ux2uXuo6TJWVgc4z2YQKcmMLg0FM9LeLVPs07zKRAxjKx49wrFavm9g1nHgXF7l71GLl9lw2md1Ju8Laszty40gWae&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220723T065921Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFF3BDJEDN%2F20220723%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4e3bee57c6754aea2774dc7d103be1c87dee9752b304c81b0859c16004aaf28b"
            alt=""
            srcset=""
          />
        </div>
        <div className="md:col-span-5 col-span-1 rounded-md drop-shadow-md shadow-sm bg-white">
          <div className="flex justify-between m-4">
            <h1>Total Nutrients</h1>
            <button>Detail</button>
          </div>
          <hr />
          <NutrientsChart />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Recipe;
