/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const FoodImage = () => {
  return (
    <React.Fragment>
      <div className="absolute top-0  bottom-0 left-0 right-0 hover:block opacity-0 hover:opacity-100 transform hover:translate-y-0 -translate-y-4 transition-all  duration-300 cursor-pointer text-white">
        <div className="bg-gray-800 rounded-t-md bg-opacity-40 p-2 flex justify-between">
          <h1 className="">Ocean Salmon with Streamed Broccoli</h1>
          <div className="flex items-center gap-2 text-sm">
            <p className="text-orange-300 flex items-center gap-1">
              <span class="material-symbols-outlined">
                sentiment_very_satisfied
              </span>{" "}
              lunch/dinner
            </p>
            <p className="text-orange-300">|</p>
            <p className="flex items-center gap-1">
              <span class="material-symbols-outlined text-lg">schedule</span> 15
              min
            </p>
          </div>
        </div>
      </div>
      <img
        className="w-full max-h-banner h-full object-cover rounded-md"
        src="https://edamam-product-images.s3.amazonaws.com/web-img/771/7717512f5ea8be8442e8f1372c7addc5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLWVhc3QtMSJIMEYCIQDV5xpqRms16kg0I3SxC5M7sxs8cpX6fybunMLAW3eVOgIhAPcpCsJu0S1CJyl3CS2LfYToAk4svC3icuIG7%2BpnSgLZKtsECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxlW%2BhuNc%2BYG2aiiIEqrwTGvVG2XSqLQsNlWLzUcAUpG3bBKJhg8hG9P%2Fs4wAKyxNAWoDR26WDoeWujd6ZzBjv3eenLGuKqp%2F8m3Y4k73IoAEmOdu4QSSCIy7cDVVJW%2BvRE6hYFEdz6bun9Rbrusg3CElG9E3z%2BmUBkryNG55JlrxqkxJKBdTyyJ9upyS7S0%2BFjMs4MhQ81m1vzDA2gd9q6NCDfPMBjYAnCjw27kQtjzjJyapaGNNvgJpjLnnxucP1gao3bm%2FvpIswP4Ui0eA8a94KTC8E6xhR1Ah4vg1ikAnh8J7TzzZozie2S6xabKf10Hu5MFBT%2BveYvPl2KxZ5v6om2gC%2FIhF4uWiJvtEP1FQ2I3GZovnX%2BucDNrGzqUwPIXkUuV1nP9xRpwJpmFnV6H03LVAhO6geCn9RNJL1Eu5RX7yQV%2BJEzw8y%2BVrWWUoF61ZRCxtxQub2ze%2FjJPGsPf%2FKKWGOaYKn0zt%2B85k%2BXjxUWV2kc8i9TdZLuDC%2BNPc%2FJuMHBLa2ejv8cyTf7AgfdVS2xbzaF%2BLkirysZ1dAc%2FRl3SJsD%2FNMhv0oubYZ%2BOmOfUDWXC38e13OrRBBX5NzlXmWvgSNHGUe4XjcvhKFKP6%2BxrLzNTkG34RArsD8wYnTDv0a6yY4F3vKd4p6k0oRAUmC%2FIM%2B5B3HzjRTsBrfmjsH7zCpVTJmafIvXqkGhTsu%2BHYq1jk51lMdVT5Jm4UG08w1wLQF1A6hFUttPBYpwtxvwfC4coZ9F25T0qsTxMOCf9ZYGOqgBiMnTSowWS7obQ8Z%2FrFAniEybVOZoNY72hPfoMa56uggWvyGL%2BhbAcjveyKr0BimlG5%2BdsCUE8C4OzgD7v2AV%2BuUOq7mscWBgXMnYMNNVj2%2BUOFgM%2B%2F5oJGVQ9AaFyDhV%2F%2FNEToP0Ir64tH6YIMXq6Kp1APBKkLnBvXUpesG4n4YZCFZvcyCIEm5L%2BY2zUK7Va2bjl1dOT8APgAMtOxd3COYTzXocp6Bq&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220724T152712Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKALP3H6H%2F20220724%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cea496b0fe6284afbca9ff12a4a54491a36998c7e5925dac2ccc8ccc91733074"
        alt="Image Food"
      />
    </React.Fragment>
  );
};
export default FoodImage;
