/* eslint-disable react/prop-types */
import { Skeleton } from "antd";
import {
  Table,
  TableBody,
  TableCell,
  // TableHead,
  // TableHeadCell,
  TableRow,
} from "flowbite-react";
const SkeletonLoading = () => {
  return (
    <Skeleton.Button
      active
      size={"small"}
      shape={"round"}
      block
      style={{ height: 20 }}
    />
  );
};
const CustomSkeletonTabel = ({ itemsColumns = [1, 2, 3, 4, 5] }) => {
  const pushDataLoading = [];
  for (let index = 0; index < itemsColumns.length; index++) {
    pushDataLoading.push(SkeletonLoading());
  }
  return (
    <div className="style-scroll rounded-lg">
      <Table hoverable className="text-right ">
        {/* <TableHead>
          {itemsColumns.map((item, i) => (
            <TableHeadCell key={i} className="font-bold text-sm">
              {item}
            </TableHeadCell>
          ))}
        </TableHead> */}
        <TableBody className="divide-y">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <TableRow
                key={i}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                {pushDataLoading.map((item, j) => (
                  <TableCell key={j}>{item}</TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomSkeletonTabel;
