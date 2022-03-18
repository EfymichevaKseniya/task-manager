import { parse, stringify } from 'query-string';
import { useUpdate, useMemoizedFn } from 'ahooks';
import { useLocation, useHistory } from 'react-router-dom';
import type { ParseOptions, StringifyOptions } from 'query-string';
import { useMemo, useRef } from 'react';
import type * as React from 'react';

export interface Options {
  navigateMode?: 'push' | 'replace';
  parseOptions?: ParseOptions;
  stringifyOptions?: StringifyOptions;
}

const baseParseConfig: ParseOptions = {
  parseNumbers: false,
  parseBooleans: false,
};

const baseStringifyConfig: StringifyOptions = {
  skipNull: false,
  skipEmptyString: false,
};

type UrlState = Record<string, any>;

const useFilterQuery = <S extends UrlState = UrlState>(
  initialState?: S | (() => S),
  options?: Options
) => {
  type State = Partial<{ [key in keyof S]: any }>;
  const {
    navigateMode = 'push',
    parseOptions,
    stringifyOptions,
  } = options || {};

  const mergedParseOptions = { ...baseParseConfig, ...parseOptions };
  const mergedStringifyOptions = {
    ...baseStringifyConfig,
    ...stringifyOptions,
  };

  const location = useLocation();

  // react-router v5
  const history = useHistory?.();
  const update = useUpdate();

  const initialStateRef = useRef(
    typeof initialState === 'function'
      ? (initialState as () => S)()
      : initialState || {}
  );

  const queryFromUrl = useMemo(() => {
    return parse(location.search, mergedParseOptions);
  }, [location.search]);

  const targetQuery: State = useMemo(
    () => ({
      ...initialStateRef.current,
      ...queryFromUrl,
    }),
    [queryFromUrl]
  );

  const setState = (s: React.SetStateAction<State>) => {
    const newQuery = typeof s === 'function' ? s(targetQuery) : s;

    update();
    if (history) {
      history[navigateMode]({
        hash: location.hash,
        search:
          stringify({ ...queryFromUrl, ...newQuery }, mergedStringifyOptions) ||
          '?',
      });
    }
  };

  return [targetQuery, useMemoizedFn(setState)] as const;
};

export default useFilterQuery;
