import React, { useEffect } from "react";
import data from "./data.json";

type Kpis = {
  "averageEmptyDistanceKpis": {
    "global": {
      "accepted": number;
      "all": number;
    },
    "filtered": {
      "accepted": number;
      "all": number;
    }
  },
  "averageWaitingTimeKpis": {
    "global": {
      "accepted": number;
      "all": number;
    },
    "filtered": {
      "accepted": number;
      "all": number;
    }
  },
  "numberOfAssignmentsKpis": {
    "global": {
      "accepted": number;
      "notAccepted": number;
    },
    "filtered": {
      "accepted": number;
      "notAccepted": number;
    }
  }
};

type ConvertedKpis = {
  "averageEmptyDistanceKpis": {
    "global": {
      "accepted": number;
      "all": number;
    },
    "filtered": string[];
  },
  "averageWaitingTimeKpis": {
    "global": {
      "accepted": number;
      "all": number;
    },
    "filtered": string[];
  },
  "numberOfAssignmentsKpis": {
    "global": {
      "accepted": number;
      "notAccepted": number;
    },
    "filtered": string[];
  }
};

const ReverseEngineeringTask: React.FC = () => {

  useEffect(() => {
    // const newData = compose(
    //   map(
    //     evolve({
    //       global: {
    //         accepted: inc,
    //         all: dec
    //       },
    //       filtered: keys
    //     })
    //   ),
    //   tap(console.log)
    // )(data);

    // console.log(newData);

    console.log(data);
    const newData = Object.entries(data as Kpis).reduce((acc, [key, value]) => {
      acc[key] = {
        global: {
          accepted: value.global.accepted + 1,
          all: value.global.all - 1
        },
        filtered: Object.keys(value.filtered)
      };
      return acc;
    }, {} as ConvertedKpis);
    console.log(newData);
  }, [])

  return <span>Check your console for the result</span>
}

export default ReverseEngineeringTask;
