import brain from './neuralNet/trained-net-source';

exports.handler = function(event, context, callback) {

  const input = JSON.parse(event.body);
  const output = brain(input);
  const ordered_output = [...output].sort((a,b)=> b - a);
  console.log("input is", input);
  console.log("output is", output);
  console.log("ordered_output is", ordered_output);


  callback(null, {
    statusCode: 200,
    body: output.indexOf(ordered_output[0]).toString()
  });
}
