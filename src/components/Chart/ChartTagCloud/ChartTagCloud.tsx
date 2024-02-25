import * as am5 from '@amcharts/amcharts5';
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated';
import * as am5wc from '@amcharts/amcharts5/wc';
import { useLayoutEffect } from 'react';

interface Data {
  tag: string;
  weight: number;
}

type ChartTagCloudProps = {
  data: Data[];
};

const ChartTagCloud = ({ data }: ChartTagCloudProps) => {
  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');

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
      cursorOverStyle: 'pointer',
    });

    series.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: '500px', height: '500px' }} />;
};

export default ChartTagCloud;
