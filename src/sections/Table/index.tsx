import {
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  Paper,
  TableCell,
} from "@mui/material";

import styles from "./Table.module.scss";
import Search from "../../components/Search";
import { EpisodeResults } from "../../utilities/Interfaces/EpisodeResults";
import { LocationResults } from "../../utilities/Interfaces/LocationResults";
import { FC, useEffect, useState } from "react";
import dataType from "../../utilities/enums/DataType";
import TableProps from "../../utilities/Interfaces/TableProps";
import { episodesTitles, locationsTitles } from "../../utilities/const/Titles";

const TableSection: FC<TableProps> = ({ name, data }) => {
  const [dataEpisodes, setDataEpisodes] = useState<EpisodeResults[]>([]);
  const [dataLocations, setDataLocations] = useState<LocationResults[]>([]);

  useEffect(() => {
    if (dataType.episodes.toLowerCase() === name.toLowerCase()) {
      setDataEpisodes(data as EpisodeResults[]);
    } else if (dataType.location.toLowerCase() === name.toLowerCase()) {
      setDataLocations(data as LocationResults[]);
    }
  }, [data]);

  return (
    <section className={styles.section}>
      <Search title={name} placeholder={`Type name of ${name}`} />
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          className={styles.table}
        >
          <TableHead>
            <TableRow>
              {name.toLowerCase() === dataType.episodes.toLowerCase()
                ? episodesTitles.map((item) => (
                    <TableCell sx={{ color: "white" }} align="center">
                      {item}
                    </TableCell>
                  ))
                : locationsTitles.map((item) => (
                    <TableCell sx={{ color: "white" }} align="center">
                      {item}
                    </TableCell>
                  ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {name.toLowerCase() === dataType.episodes.toLowerCase()
              ? dataEpisodes?.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="center">{item.episode}</TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.air_date}</TableCell>
                  </TableRow>
                ))
              : dataLocations?.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.type}</TableCell>
                    <TableCell align="center">{item.dimension}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default TableSection;
