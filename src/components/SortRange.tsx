import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const SortRange = () => {
  const [range, setRange] = useState("day");
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.t ?? false) {
      //console.log(router.query.t);
      setRange(router.query.t.toString());
    }
  }, [router]);

  const updateRange = (e, r) => {
    e.preventDefault();
    //console.log(router.query);
    setRange(r);
    if (
      (router.query?.slug?.[0] ?? false) &&
      (router.query?.slug?.[1] ?? false)
    ) {
      router.push({
        pathname: "/r/[subs]/[sort]",
        query: {
          subs: router.query?.slug?.[0] ?? "",
          sort: router.query?.slug?.[1] ?? "",
          t: encodeURI(r),
        },
      });
    } 
    else if (
      (router.query?.slug?.[0] ?? false)
    ) {
      router.push({
        pathname: "/r/[subs]/top",
        query: {
          subs: router.query?.slug?.[0] ?? "",
          //sort: router.query?.slug?.[1] ?? "top",
          t: encodeURI(r),
        },
      });
    } 
    else if (router.query.frontsort) {
      router.push({
        pathname: "/[frontsort]",
        query: {
          frontsort: router.query.frontsort,
          t: encodeURI(r),
        },
      });
    } else {
      router.push({
        pathname: "/[sort]",
        query: { sort: router.query?.slug?.[1] ?? "", t: encodeURI(r) },
      });
    }
  };

  return (
    <div>
      <ul>
        <li
          className={range === "hour" ? `font-bold` : ""}
          onClick={(e) => updateRange(e, "hour")}
        >
          Now
        </li>
        <li
          className={range === "day" ? `font-bold` : ""}
          onClick={(e) => updateRange(e, "day")}
        >
          Today
        </li>
        <li
          className={range === "week" ? `font-bold` : ""}
          onClick={(e) => updateRange(e, "week")}
        >
          Week
        </li>
        <li
          className={range === "month" ? `font-bold` : ""}
          onClick={(e) => updateRange(e, "month")}
        >
          Month
        </li>
        <li
          className={range === "year" ? `font-bold` : ""}
          onClick={(e) => updateRange(e, "year")}
        >
          Year
        </li>
        <li
          className={range === "all" ? `font-bold` : ""}
          onClick={(e) => updateRange(e, "all")}
        >
          All
        </li>
      </ul>
    </div>
  );
};

export default SortRange;
