.data
v: .space 128
w: .space 128
x: .double 2.0
y: .double 1.5
z: .double 0.0
.text
daddi R1, R0, v
daddi R2, R0, w
daddi R3, R0, 128

ldc1 F2, x(R0)
ldc1 F4, y(R0)
daddi R4, R0, 0
daddi R5, R0, 0
dmtc1 R6, F20
daddi R6, R0, 8
cvt.d.l F20, F20


loop1:
dmtc1 R4, F6
daddi R4, R4, 8
cvt.d.l F6, F6

mul.d F8, F2, F6
mul.d F10, F4, F6
add.d F6, F6, F20
daddi R5, R5, 8
mul.d F14, F2, F6
mul.d F16, F4, F6
sdc1 F8, 0(R1)
sdc1 F10, 0(R2)
sdc1 F14, 8(R1)
sdc1 F16, 8(R2)

daddi R1, R1, 16
daddi R2, R2, 16

bne R5, R3, loop1

