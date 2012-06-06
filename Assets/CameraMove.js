#pragma strict

private var yaw = 0.0;
private var pitch = 0.0;
private var prevMousePosition = Vector2.zero;

function Update () {
    if (Input.GetMouseButtonDown(0)) {
        prevMousePosition = Input.mousePosition;
    } else if (Input.GetMouseButton(0)) {
        var move = Input.mousePosition - prevMousePosition;
        yaw -= 180.0 / Screen.width * move.x;
        pitch += 180.0 / Screen.height * move.y;
        prevMousePosition = Input.mousePosition;
    }
    
    var rotation = 
        Quaternion.AngleAxis(yaw, Vector3.up) *
        Quaternion.AngleAxis(pitch, Vector3.right);
    
    transform.rotation = Quaternion.Slerp(rotation, transform.rotation, Mathf.Exp(-8.0 * Time.deltaTime));
}
