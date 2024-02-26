import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './ChartCollapsible.scss';

type ChartCollapsibleProps = {
  data: {
    value: number;
    name: string;
    mobileHide: boolean;
    children: (
      | {
          name: string;
          mobileHide: boolean;
          value: number;
          children: {
            name: string;
            mobileHide: boolean;
            value: number;
          }[];
        }
      | {
          name: string;
          mobileHide: boolean;
          value: number;
          children?: undefined;
        }
    )[];
  };
  isMobile: boolean;
};

export const ChartCollapsible = ({ data, isMobile }: ChartCollapsibleProps) => {
  const [mobileWidth, setMobileWidth] = useState<string | number>('auto');
  const divRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const { offsetWidth } = document.body;
    setMobileWidth(isMobile ? offsetWidth : '');
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener('resize', handleScroll);

    return () => window.removeEventListener('resize', handleScroll);
  }, [isMobile]);

  useLayoutEffect(() => {
    const root = am5.Root.new('chartdivcollapsible');

    root.setThemes([am5themesAnimated.new(root)]);

    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      }),
    );

    const series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 2,
        topDepth: 1,
        initialDepth: 1,
        valueField: 'value',
        categoryField: 'name',
        childDataField: 'children',
        idField: 'name',
        linkWithField: 'linkWith',
        manyBodyStrength: -10,
        centerStrength: 0.8,
        minRadius: isMobile ? 20 : 15,
        nodePadding: 0,
      }),
    );

    series.get('colors')?.setAll({
      step: 2,
    });

    series.links.template.set('strength', 0.5);

    series.data.setAll([data]);

    series.set('selectedDataItem', series.dataItems[0]);

    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [isMobile, data]);

  return <div id="chartdivcollapsible" className="wow pulse" style={{ width: mobileWidth }} ref={divRef} />;
};
