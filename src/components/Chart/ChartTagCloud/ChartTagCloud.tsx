import * as am5 from '@amcharts/amcharts5';
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated';
import * as am5wc from '@amcharts/amcharts5/wc';
import { useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './ChartTagCloud.scss';

interface Data {
  tag: string;
  weight: number;
}

type ChartTagCloudProps = {
  data: Data[];
};

export const ChartTagCloud = ({ data }: ChartTagCloudProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 740px)' });

  useLayoutEffect(() => {
    const root = am5.Root.new('chartdivtag');

    root.setThemes([am5themesAnimated.new(root)]);

    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      }),
    );

    const series = container.children.push(
      am5wc.WordCloud.new(root, {
        categoryField: 'tag',
        valueField: 'weight',
        calculateAggregates: true,
        minFontSize: 14,
      }),
    );

    series.set('heatRules', [
      {
        target: series.labels.template,
        dataField: 'value',
        min: am5.color(0x25282b),
        max: am5.color(0xfdc435),
        key: 'fill',
      },
    ]);

    series.labels.template.setAll({
      fontFamily: 'Courier New',
    });

    series.data.setAll(isMobile ? data.slice(0, 20) : data);

    return () => {
      root.dispose();
    };
  }, [isMobile]);

  return <div id="chartdivtag" className="wow pulse" />;
};
